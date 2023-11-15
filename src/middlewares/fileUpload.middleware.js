// 1 Import Multer
import multer from "multer";

// 2 Configure with file name and storage location

const storage = multer.diskStorage( {
    destination: (req, file, cb) => {
        cb(null, "./uploads/")  // Destination for the files to be uploaded and null is for erros we can also add a verificaiton if the folder is present or You've got the permission to store or not
    },

    filename: (req, file , cb) => {
        cb(null , new Date().toISOString + file.originalname)
    },
} )

// 3 Final Configuration

const upload = multer( {storage: storage} );
export default upload;