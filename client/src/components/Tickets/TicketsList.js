import Ticket from "./Ticket";


const dummyList = [
  {
    title: "some title",
    id: 1,
    body: "whatever",
  },
  {
    title: "some title",
    id: 2,
    body: "asdasd",
  },
  {
    title: "some title",
    id: 3,
    body: "fhgfhg",
  },
  {
    title: "",
    id: 4,
    body: "dsfsdf",
  },
  {
    title: "some fds",
    id: 5,
    body: "hjghj",
  },
  {
    title: "some title",
    id: 6,
    body: "whatever",
  },
  {
    title: "some title",
    id: 7,
    body: "asdasd",
  },
  {
    title: "some title",
    id: 8,
    body: "fhgfhg",
  },
  {
    title: "",
    id: 9,
    body: "dsfsdf",
  },
  {
    title: "some fds",
    id: 10,
    body: "hjghj",
  },
]

const ListComponent = ({ mainTodoList }) => {
  //renders the todo array, returns loading if todo hasn't loaded yet
  return dummyList.length === 0 || undefined || null ? (
    // <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-white dark:bg-zinc-500 opacity-50 flex flex-col items-center justify-center">
    <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-center dark:text-white text-lg lg:text-xl font-medium">
        Notes you add appear here
      </h2>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
      {dummyList?.map((list) => {
        return (
          <Ticket
            title={list.title}
            id={list.id}
            body={list.body}
            key={list.id}
          />
        );
      })}
    </div>
  );
};

export default ListComponent;
