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

export const series = [
  {
    id: 1,
    title: "Soul Winning",
    type: "series",
    lessons: [
      { id: 1.1, title: "Love of God (John 3:16)", type: "lesson" },
      { id: 1.2, title: "From Death to Life (Rom. 6:23)", type: "lesson" },
      { id: 1.3, title: "Saved by Grace (Eph. 2:8)", type: "lesson" },
      { id: 1.4, title: "No Condemnation (Rom. 8:1)", type: "lesson" },
    ],
  },
  {
    id: 2,
    title: "Discipleship",
    type: "series",
    lessons: [
      { id: 2.1, title: "Saving Grace", type: "lesson" },
      { id: 2.2, title: "Justification (Judicial)", type: "lesson" },
      { id: 2.3, title: "Justification (Accounting)", type: "lesson" },
      { id: 2.4, title: "The New Birth", type: "lesson" },
      {
        id: 2.5,
        title: "Luke 15",
        type: "series",
        lessons: [
          { id: 2.11, title: "Luke 15 1", type: "lesson" },
          { id: 2.21, title: "Luke 15 2", type: "lesson" },
          { id: 2.31, title: "Luke 15 3", type: "lesson" },
          { id: 2.41, title: "Luke 15 4", type: "lesson" },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "The LORD our Holiness",
    type: "series",
    lessons: [
      { id: 3.1, title: "Foundation", type: "lesson" },
      { id: 3.2, title: "Atonement", type: "lesson" },
      {
        id: 3.3,
        title: "Separation from, Separation for",
        type: "lesson",
      },
      { id: 3.4, title: "Holiness: God's Sovereign Act", type: "lesson" },
    ],
  },
  {
    id: 4,
    title: "The LORD our Righteousness",
    type: "series",
  },
];
