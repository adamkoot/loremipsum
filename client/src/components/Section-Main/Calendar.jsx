import MainLayout from "./Partials/MainLayout";
import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "moment/locale/pl";
import "react-big-calendar/lib/css/react-big-calendar.css";
import UserContext from "../../utilities/userContext";
// import events from "./Data/calendar-data";
const localizer = momentLocalizer(moment);

function color(event) {
  var backgroundColor = event.color;
  var style = {
    backgroundColor: backgroundColor,
  };
  return {
    style: style,
  };
}

const messages = {
  allDay: "Wszystkie dni",
  previous: "<",
  next: ">",
  today: "Dzisiaj",
  month: "Miesiąc",
  week: "Tydzień",
  day: "Dzień",
  agenda: "Agenda",
  date: "Data",
  time: "Czas",
  event: "Wydarzenie",
  Mon: "Poniedziałek",
  showMore: (total) => `+ Pokaż więcej (${total})`,
};

export default function Calendary(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [pregnancyStart, setPregnancyStart] = useState(null);

  useEffect(() => {
    if (user) {
      setPregnancyStart(
        moment(user.pregnancyStart.slice(0, 10), "YYYY MM DD").toDate()
      );
    }
  }, [user]);

  const events = [
    {
      start: pregnancyStart,
      end: pregnancyStart,
      title: "Początek ciąży",
      description: "Początek ciąży.",
      color: "#f44336",
    },
    {
      start: pregnancyStart,
      end: moment(pregnancyStart).add(12, "weeks").toDate(),
      title: "Pierwsze badanie",
      description:
        "W tym terminie powinnaś zrobić pierwsze badanie. Obejmuje ono m.in dokładne badanie ciężarnej, określenie grupy krwi i czynnika Rh oraz przeprowadzenie wywiadu położniczego.",
      color: "#4caf50",
    },
    {
      start: moment(pregnancyStart).add(17, "weeks").toDate(),
      end: moment(pregnancyStart).add(20, "weeks").toDate(),
      title: "Drugie badanie",
      description:
        "W tym okresie powinnaś zgłosić się do lekarza w celu zbadania ciąży, łącznie z badaniem ogólnym (badanie internistyczne).",
      color: "#2196f3",
    },
    {
      start: moment(pregnancyStart).add(25, "weeks").toDate(),
      end: moment(pregnancyStart).add(28, "weeks").toDate(),
      title: "Trzecie badanie",
      description:
        "W tym okresie powinnaś zgłosić się do lekarza w celu zbadania ciąży, oraz zbadania krwi.",
      color: "#f44336",
    },
    {
      start: moment(pregnancyStart).add(30, "weeks").toDate(),
      end: moment(pregnancyStart).add(34, "weeks").toDate(),
      title: "Czwarte badanie",
      description: "Kontrolne badanie ciąży.",
      color: "#673ab7",
    },
    {
      start: moment(pregnancyStart).add(35, "weeks").toDate(),
      end: moment(pregnancyStart).add(38, "weeks").toDate(),
      title: "Piąte badanie",
      description: "Kontrolne badanie ciąży.",
      color: "#4caf50",
    },
    {
      start: moment(pregnancyStart).add(40, "weeks").toDate(),
      end: moment(pregnancyStart).add(41, "weeks").toDate(),
      title: "Oczekiwanie narodzin dziecka!",
      description: "Zdrowia, szczęścia, pomyślności.",
      color: "#f06292",
    },
    {
      start: moment(pregnancyStart).add(16, "weeks").toDate(),
      end: moment(pregnancyStart).add(20, "weeks").toDate(),
      title: "Dodatkowe badanie USG",
      description: "Można wykonać dodatkowe badanie USG",
      color: "#ff9800",
    },
    {
      start: moment(pregnancyStart).add(30, "weeks").toDate(),
      end: moment(pregnancyStart).add(34, "weeks").toDate(),
      title: "Dodatkowe badanie USG",
      description: "Można wykonać dodatkowe badanie USG",
      color: "#ff9800",
    },
  ];

  const handleClickOpen = (title, description) => {
    setOpen(true);
    setTitle(title);
    setDescription(description);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainLayout history={props.history}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>

      <Calendar
        localizer={localizer}
        defaultView="month"
        events={events}
        style={{ height: "90vh" }}
        eventPropGetter={color}
        messages={messages}
        onSelectEvent={(event) =>
          handleClickOpen(event.title, event.description)
        }
      />
    </MainLayout>
  );
}
