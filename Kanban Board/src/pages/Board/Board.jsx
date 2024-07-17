import React, { useState } from 'react';
import Board, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { RxCross2 } from 'react-icons/rx';
import { IoMdAdd } from 'react-icons/io';
import useBoard from '../../store/Board';
import AddTaskModal from '../../components/AddTask/AddTask';

const BoardPage = () => {
    const { board, setBoard } = useBoard();
    const [modalOpened, setModalOpened] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState(null);

    const handleColumnMove = (source, destination) => {
        const updatedBoard = moveColumn(board, source, destination);
        setBoard(updatedBoard);
    };

    const handleCardMove = (source, destination) => {
        const updatedBoard = moveCard(board, source, destination);
        setBoard(updatedBoard);
    };

    const getColumn = (card) => {
        return board.columns.find(column => column.cards.some(c => c.id === card.id));
    };

    const getGradient = (card) => {
        const column = getColumn(card);
        const title = column.title;
        switch (title) {
            case 'TODO':
                return 'bg-gradient-to-r from-gray-500 via-blue-400 to-cyan-400';
            case 'Doing':
                return 'bg-gradient-to-r from-gray-500 via-red-400 to-pink-400';
            case 'Completed':
                return 'bg-gradient-to-r from-gray-500 via-green-400 to-lime-400';
            case 'Backlog':
                return 'bg-gradient-to-r from-gray-500 via-purple-400 to-indigo-400';
            default:
                return '';
        }
    };

    const handleCardAdd = (title, detail, assignedTo, dueDate, files) => {
        const card = { id: new Date().getTime(), title, description: detail, assignedTo, dueDate, files };
        const updatedBoard = addCard(board, selectedColumn, card);
        setBoard(updatedBoard);
        setModalOpened(false);
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            <span className="text-center text-xl font-bold text-white">Kanban Board</span>
            <Board
                allowAddColumn
                allowRenameColumn
                allowRemoveCard
                onCardDragEnd={handleCardMove}
                onColumnDragEnd={handleColumnMove} 
                renderCard={(props) => (
                    <div className={`flex flex-col gap-6 p-4 mt-5 rounded-md ${getGradient(props)}`}>
                        <div className="flex justify-between">
                            <span>{props.title}</span>
                            <button
                                className="bg-none border-none cursor-pointer"
                                type="button"
                                onClick={() => {
                                    const updatedBoard = removeCard(board, getColumn(props), props);
                                    setBoard(updatedBoard);
                                }}
                            >
                                <RxCross2 color="black" size={15} />
                            </button>
                        </div>
                        <span className="text-sm">{props.description}</span>
                        {props.assignedTo && <span className="text-xs">Assigned to: {props.assignedTo}</span>}
                        {props.dueDate && <span className="text-xs">Due date: {props.dueDate.toLocaleDateString()}</span>}
                        {props.files && props.files.length > 0 && (
                            <div className="text-xs">
                                Attached files:
                                {props.files.map((file, index) => (
                                    <div key={index}>
                                        <img src={URL.createObjectURL(file)} alt={file.name} className="max-w-full h-auto mt-1 rounded-md shadow-md" style={{ maxWidth: '150px' }} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                renderColumnHeader={(props) => (
                    <div className="flex justify-between px-2 border-black border-b-2">
                        <span className="font-bold text-lg">{props.title}</span>
                        <IoMdAdd
                            color="black"
                            size={25}
                            title="Add task"
                            onClick={() => {
                                setSelectedColumn(props);
                                setModalOpened(true);
                            }}
                        />
                    </div>
                )}
            >
                {board}
            </Board>
            <AddTaskModal
                visible={modalOpened}
                handleCardAdd={handleCardAdd}
                onClose={() => setModalOpened(false)}
            />
        </div>
    );
};

export default BoardPage;
