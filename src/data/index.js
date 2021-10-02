import Button from "../components/Button";
import IconButton from "../components/IconButton";
import SvgIcon from "../components/SvgIcon";

export const columns = [
  { path: "index", label: "#", isSmall: true },
  { path: "title", label: "Lesson" },
  { path: "dateTaken", label: "Date Taken" },
  { path: "status", label: "Status" },
];

export const columnLessons = [
  { path: "index", label: "#", isSmall: true },
  { path: "title", label: "Lesson" },
  { path: "references", label: "references" },
  {
    key: "file",
    label: "file (slides)",
    content: (id) => (
      <Button
        onClick={() => console.log(id)}
        text='Download'
        className='btn-sm'
        Icon={() => <SvgIcon name='download' />}
      />
    ),
  },
  {
    key: "actions",
    label: "",
    isSmall: true,
    content: (id) => (
      <>
        <IconButton className='mr-3' iconName='update' color='info' />
        <IconButton iconName='delete' color='danger' />
      </>
    ),
  },
];

export const data = [
  {
    id: 1,
    title: "Love of God",
    references: "John 3:16, Rom. 5:8",
    dateTaken: "Dec. 12, 2020",
    status: "ok",
  },
  {
    id: 2,
    title: "Saving Grace",
    references: "Eph. 2:8-9",
    dateTaken: "Dec. 13, 2020",
    status: "ok",
  },
  {
    id: 3,
    title: "From Death to Life",
    references: "Romans 6:23",
    dateTaken: "Dec. 14, 2020",
    status: "ok",
  },
  {
    id: 4,
    title: "Gift of No Condemnation",
    references: "Romans 8:1",
    dateTaken: "Dec. 15, 2020",
    status: "ok",
  },
  {
    id: 5,
    title: "Gift of No Condemnation",
    references: "Romans 8:1",
    dateTaken: "Dec. 15, 2020",
    status: "ok",
  },
  {
    id: 6,
    title: "Gift of No Condemnation",
    references: "Romans 8:1",
    dateTaken: "Dec. 15, 2020",
    status: "ok",
  },
  {
    id: 7,
    title: "Gift of No Condemnation",
    references: "Romans 8:1",
    dateTaken: "Dec. 15, 2020",
    status: "ok",
  },
  {
    id: 8,
    title: "Gift of No Condemnation",
    references: "Romans 8:1",
    dateTaken: "Dec. 15, 2020",
    status: "ok",
  },
  {
    id: 9,
    title: "Gift of No Condemnation",
    references: "Romans 8:1",
    dateTaken: "Dec. 15, 2020",
    status: "ok",
  },
];
