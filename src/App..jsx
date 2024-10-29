import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import SectionAddTask from "./components/SectionAddTask";
import Days from "./components/Days";
import Habits from "./components/Habits";
import ShowTask from "./components/ShowTask";
import HabitSumTime from "./components/HabitSumTime";
import PlannedTime from "./components/PlannedTime";
import RealTime from "./components/RealTime";
import Language from "./components/Language";

const INITIAL_DAYS = {
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  pl: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"],
};

const INITIAL_HABITS = {
  en: ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"],
  pl: ["MÓWIENIE", "CZYTANIE", "PISANIE", "SŁUCHANIE", "SŁOWNICTWO"],
};

const INITIAL_DAY_TIMES = [
  { day: "Monday", time: 0, real_time: 0 },
  { day: "Tuesday", time: 0, real_time: 0 },
  { day: "Wednesday", time: 0, real_time: 0 },
  { day: "Thursday", time: 0, real_time: 0 },
  { day: "Friday", time: 0, real_time: 0 },
];

const INITIAL_HABIT_TIMES = [
  { study: "SPEAKING", time: 0 },
  { study: "READING", time: 0 },
  { study: "WRITING", time: 0 },
  { study: "LISTENING", time: 0 },
  { study: "VOCABULARY", time: 0 },
];

// Hook customowy do obsługi localStorage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const App = () => {
  const [store, setStore] = useLocalStorage("myTasks", []);
  const [switchPL, setSwitchPL] = useLocalStorage("languagePL", false);
  const [days] = useState(INITIAL_DAYS);
  const [habits] = useState(INITIAL_HABITS);
  const [divNames, setDivNames] = useState([]);
  const [dayTimes, setDayTimes] = useState(INITIAL_DAY_TIMES);
  const [habitTimes, setHabitTimes] = useState(INITIAL_HABIT_TIMES);

  // Generowanie nazw dla divów
  const generateDivNames = useCallback(() => {
    const names = habits.en.flatMap((habit) => days.en.map((day) => `${day.toLowerCase()}-${habit}`));
    setDivNames(names);
  }, [days.en, habits.en]);

  // Obliczanie czasów
  const calculateTimes = useCallback(() => {
    const newDayTimes = INITIAL_DAY_TIMES.map((day) => ({ ...day }));
    const newHabitTimes = INITIAL_HABIT_TIMES.map((habit) => ({ ...habit }));

    store.forEach((task) => {
      const dayTime = newDayTimes.find((d) => d.day === task.day);
      if (dayTime) {
        dayTime.time += Number(task.time);
        if (task.done) {
          dayTime.real_time += Number(task.time);
        }
      }

      const habitTime = newHabitTimes.find((h) => h.study === task.study);
      if (habitTime) {
        habitTime.time += Number(task.time);
      }
    });

    setDayTimes(newDayTimes);
    setHabitTimes(newHabitTimes);
  }, [store]);

  useEffect(() => {
    generateDivNames();
    calculateTimes();
  }, [store, generateDivNames, calculateTimes]);

  return (
    <>
      <Header store={store} updateStore={setStore} switchPL={switchPL} />
      <SectionAddTask store={store} setStore={setStore} days={days} habits={habits} switchPL={switchPL} />
      <section className="layout">
        <Days daysNames={days} switch={switchPL} />
        <Habits habitsNames={habits} switch={switchPL} />

        {divNames.map((item) => (
          <ShowTask key={item} name={item} times={dayTimes} store={store} updateStore={setStore} />
        ))}

        <HabitSumTime times={habitTimes} />
        <PlannedTime times={dayTimes} switch={switchPL} />
        <RealTime times={dayTimes} switch={switchPL} />
        <Language updateLang={setSwitchPL} switch={switchPL} />
      </section>
    </>
  );
};

export default App;
