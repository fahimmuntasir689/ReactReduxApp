import { useGetTasksQuery } from "@/redux/api/baseApi";
import TaskCard from "./TaskCard";
import type { ITask } from "@/types";


const Tasks = () => {
    const { data, isLoading, isError } = useGetTasksQuery(undefined)
    console.log(data, isLoading, isError)


    return (
        <div>
            {


                !isLoading && data.tasks.map((task: ITask) => <TaskCard key={task._id} task={task}></TaskCard>)
            }

        </div>
    );
};

export default Tasks;
// some features are coming