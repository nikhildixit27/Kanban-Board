import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import 'tailwindcss/tailwind.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDropzone } from 'react-dropzone';

const AddTask = ({ visible, onClose, handleCardAdd }) => {
    const [title, setTitle] = React.useState('');
    const [detail, setDetail] = React.useState('');
    const [assignedTo, setAssignedTo] = React.useState('');
    const [dueDate, setDueDate] = React.useState(null);
    const [files, setFiles] = React.useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <Rodal
            customStyles={{
                background: "rgb(58 58 58)",
                padding: "20px",
                width: "50%",
                top: "-3rem",
                height: "fit-content",
                maxWidth: "40rem"
            }}
            visible={visible}
            onClose={onClose}
        >
            <div className="flex flex-col w-full text-white">
                <div className="mt-8">
                    <span className="font-bold text-lg">Title</span>
                    <input
                        type="text"
                        placeholder="Task"
                        className="mt-3 p-2 w-full bg-transparent border border-gray-400 rounded-md text-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mt-8">
                    <span className="font-bold text-lg">Detail</span>
                    <textarea
                        rows={5}
                        className="mt-3 p-2 w-full bg-transparent border border-gray-400 rounded-md text-lg resize-none"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        placeholder="What you wish to do?"
                    />
                </div>

                <div className="mt-8">
                    <span className="font-bold text-lg">Assign To</span>
                    <input
                        type="text"
                        placeholder="Assignee"
                        className="mt-3 p-2 w-full bg-transparent border border-gray-400 rounded-md text-lg"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                    />

                </div>

                <div className="mt-8">
                    <span className="font-bold text-lg">Due Date</span>
                    <DatePicker
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        className="mt-3 p-2 w-full bg-transparent border border-gray-400 rounded-md text-lg"
                    />
                </div>

                <div className="mt-8">
                    <span className="font-bold text-lg">Attach Files</span>
                    <div
                        {...getRootProps({ className: 'dropzone' })}
                        className="mt-3 p-2 w-full bg-transparent border border-gray-400 rounded-md text-lg"
                    >
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    <div>
                        {files.map((file, index) => (
                            <div key={index} className="mt-2">
                                {file.name}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    disabled={title === "" && detail === ""}
                    className={`mt-6 self-end py-2 px-4 rounded-md ${title === "" && detail === "" ? "bg-gray-500" : "bg-gradient-to-r from-orange-400 to-red-400 text-white cursor-pointer"}`}
                    onClick={() => {
                        handleCardAdd(title, detail, assignedTo, dueDate, files);
                        setTitle("");
                        setDetail("");
                        setAssignedTo("");
                        setDueDate(null);
                        setFiles([]);
                    }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    );
};

export default AddTask;
