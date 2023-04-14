import UserLayout from '@/layouts/UserLayout'
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import upload from "../../assets/upload.svg"
import Image from 'next/image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import ClearIcon from '@mui/icons-material/Clear';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

const renderXMLDownload = () => {
    return(
        <>
            <Button
                sx={{
                    // width: '100%',
                    color: '#6b7280',
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "none",
                    '&:hover': {
                        backgroundColor: '#6b728020',
                        boxShadow: 'none',
                    },  
                }}
                variant="text" startIcon={<FileDownloadOutlinedIcon />}>
                Download
            </Button>
        </>
    )
}
const renderPDFDownload = () => {
    return(
        <>
            <Button
                sx={{
                    // width: '100%',
                    color: '#6b7280',
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "none",
                    '&:hover': {
                        backgroundColor: '#6b728020',
                        boxShadow: 'none',
                    },  
                }}
                variant="text" startIcon={<FileDownloadOutlinedIcon />}>
                Download
            </Button>
        </>
    )
}

const rows = [
    { id: 1, col1: '23/08/2022', col2: 'ABC PVT LTD', col3: "10,000$", col4:"USA", col5:"df", col6: "XXXXX", col7:""},
    { id: 2, col1: '5/10/2022', col2: 'RTY PVT LTD', col3: "45,000$", col4:"Australia", col5:"", col6: "XXXXX", col7:""},
    { id: 3, col1: '1/11/2022', col2: 'JKL PVT LTD', col3: "67,000$", col4:"Russia", col5:"", col6: "XXXXX", col7:""},
    { id: 4, col1: '13/02/2022', col2: 'XYZ PVT LTD', col3: "78,000$", col4:"India", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
    { id: 5, col1: '04/07/2022', col2: 'BNM PVT LTD', col3: "27,000$", col4:"Canada", col5:"", col6: "XXXXX", col7:""},
];
const columns = [
    { field: 'col1',headerAlign: 'center', headerName: 'Date', width: 120 },
    { field: 'col2',headerAlign: 'center', headerName: 'Party Name', width: 200 },
    { field: 'col3',headerAlign: 'center', headerName: 'Account', width: 170 },
    { field: 'col4',headerAlign: 'center', headerName: 'Country', width: 170 },
    { field: 'col5',headerAlign: 'center', headerName: 'XML', width: 140, renderCell:renderXMLDownload },
    { field: 'col6',headerAlign: 'center', headerName: 'UDIN', width: 200 },
    { field: 'col7',headerAlign: 'center', headerName: 'PDF', width: 140, renderCell:renderPDFDownload },
];


const ArchievedData = () => {

    const [state, setState] = React.useState(false);


    const handleClick = () => {
        setState(true);
    };
    
    const handleCloseSnackbar = () => {
        setState(false);
    };


    
    const MAX_COUNT = 5;
    const K_UNIT = 1024;
    const SIZES = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length > MAX_COUNT) {
                    handleClick();
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)
    }

    const handleDeleteFiles = (index) => {
        const uploaded = [...uploadedFiles];
        uploaded.splice(index, 1)
        setUploadedFiles(uploaded)
    }

    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 2,
        borderRadius: 1.5,
        p: 4,
        outline: "none"
    };

    console.log(uploadedFiles)

    return (
        <UserLayout>
            <Snackbar
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical:"bottom", horizontal:"right" }}
                open={state}
                onClose={handleCloseSnackbar}
                autoHideDuration={6000}
                message="I love snacks"
                key={"bottom" + "right"}
            >
                <Alert onClose={handleCloseSnackbar} className="bg-[#f57c00] text-[#000000de]"sx={{ width: '100%' }}>
                    File limit exceeded. You can upload upto 5 files.
                </Alert>
            </Snackbar>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <h1 className='text-[1.125rem] font-medium'>Upload Files</h1>
                    <div>
                        <div className="flex items-center justify-center w-full mt-4">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col gap-4 text-center items-center justify-center pt-5 pb-6">
                                    <Image className='w-24 h-24' src={upload} alt="upload" />
                                    <div>
                                        <h1 className='text-[1.25rem] font-semibold'>Select File</h1>
                                        <p className="text-sm text-gray-500"><span className="font-semibold">Click to upload file from your computer</span></p>
                                    </div>
                                </div>
                                <input onChange={handleFileEvent} accept='application/pdf, image/png' id="dropzone-file" multiple type="file" className="hidden" />
                            </label>
                        </div> 
                        <div className="mt-4 flex flex-col gap-2">
                            {uploadedFiles.map((file, index) => (
                                <div key={index} className='flex items-center justify-between border p-4 rounded-md'>
                                    <div className='flex items-center gap-2'>
                                        {
                                            file.type === 'image/png' ? <ImageIcon className="text-green-500"/> : <PictureAsPdfIcon className="text-green-500"/>
                                        }
                                        <div>
                                            <p className='text-sm font-medium'>{file.name}</p>
                                            <p className='text-xs'>{parseFloat((file.size / Math.pow(K_UNIT, Math.floor(Math.log(file.size) / Math.log(K_UNIT)))).toFixed(2)) + " " + SIZES[Math.floor(Math.log(file.size) / Math.log(K_UNIT))]}</p>
                                        </div>
                                    </div>
                                    <ClearIcon onClick={() => handleDeleteFiles(index)} className='w-4 h-4 cursor-pointer'/>
                                </div>
                            ))}
                        </div>
                        <div className='mt-4 flex justify-end'>
                            <button onClick={() => setUploadedFiles([])} className={`${uploadedFiles.length === 0 ? "hidden" : ""} px-4 py-2 rounded-md text-gray-500`}>Remove all</button>
                            <button onClick={handleClose} className='bg-green-500 px-4 py-2 rounded-md text-white transition-all duration-300 hover:shadow-md'>Upload</button>
                        </div>
                    </div>
                </Box>
                </Fade>
            </Modal>
            <section className='w-full h-full'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className="text-[1.5rem] font-semibold">Archieved Data</h1>
                    <Button
                        sx={{
                            // width: '100%',
                            color: '#22c55e',
                            fontFamily: "'Poppins', sans-serif",
                            textTransform: "none",
                            '&:hover': {
                                backgroundColor: 'rgb(134 239 172 / 0.1)',
                                // borderColor: '#0062cc',
                                boxShadow: 'none',
                            },  
                        }}
                        onClick={handleOpen} variant="text" startIcon={<FileUploadOutlinedIcon />}>
                        Upload old 15CACB
                    </Button>
                </div>
                <section className="w-full pb-8">
                <div style={{ width: '100%' }}>
                    <DataGrid
                        autoHeight
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            '& .MuiDataGrid-row.Mui-selected': {
                                backgroundColor: "transparent"
                            },
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: "rgb(134 239 172 / 0.1)"
                            },
                            '& .MuiDataGrid-cell:focus':{
                                outline: "none"
                            },
                        }}
                        rows={rows} 
                        columns={columns}
                    />
                </div>
                </section>
            </section>
        </UserLayout>
    )
}

export default ArchievedData