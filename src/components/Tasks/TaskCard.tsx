import type { ITask } from "@/types";
interface IProp {
    task: ITask
}


const TaskCard = ({ task }: IProp) => {
    const { _id, deuDate, description, title, isCompleted, priority } = task
    console.log(_id, deuDate, description, title, isCompleted, priority)
    return (
        <div className="border-2 bg-amber-50 mb-3.5">
            <h1></h1>
            <p>User : {title}</p>
            <p>{description}</p>



        </div>
    );
};

export default TaskCard;