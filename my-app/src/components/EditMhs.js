import React, { Fragment, useState } from "react";

const EditMhs = ({ mh }) => {
    const [nama_mahasiswa, setNama] = useState(mh.nama_mahasiswa)
    const [nilai_mahasiswa, setNilai] = useState(mh.nilai_mahasiswa)
    let [grade, setGrade] = useState(mh.grade)
    // console.log(mh);
    
    if (nilai_mahasiswa >= 95) {
        grade = "A+"
    } else if (nilai_mahasiswa >= 90) {
        grade = "A"
    } else if (nilai_mahasiswa >= 85) {
        grade = "A-"
    } else if (nilai_mahasiswa >= 80) {
        grade = "B+"
    } else if (nilai_mahasiswa >= 75) {
        grade = "B"
    } else if (nilai_mahasiswa >= 70) {
        grade = "B-"
    } else if (nilai_mahasiswa >= 60) {
        grade = "C"
    } else if (nilai_mahasiswa >= 40) {
        grade = "D"
    } else if (nilai_mahasiswa == "") {
        grade = ""
    } else if (nilai_mahasiswa < 40) {
        grade = "E"
    }

    //edit function
    const updateNama = async (e) => {
        e.preventDefault();
        try {
            const body = { nama_mahasiswa, nilai_mahasiswa, grade}
            const response = await fetch(`http://localhost:5000/putmhs/${mh.mhs_id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
            // console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${mh.mhs_id}`} onClick={() => setNama(mh.nama_mahasiswa)}>
                Edit
            </button> */}
            <li class="list-inline-item">
                <button class="btn btn-warning btn-sm rounded-0" type="button" data-toggle="modal" data-target={`#id${mh.mhs_id}`} onClick={() => {setNama(mh.nama_mahasiswa);setNilai(mh.nilai_mahasiswa)}} data-placement="top" title="Edit" ><i class="fa fa-edit"></i></button>
            </li>

            <div class="modal" id={`id${mh.mhs_id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit Student Data</h4>
                            {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                        </div>

                        <div class="modal-body text-left mt-5">
                            <div class="form-group">
                                <label for="inputnama">Student Name</label>
                                <input id="inputnama" type="text" className="form-control" value={nama_mahasiswa} onChange={e => setNama(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="inputnilai">Student Score</label>
                                <input id="inputnilai" type="text" className="form-control" value={nilai_mahasiswa} onChange={e => setNilai(e.target.value)} />
                            </div>
                            <div>
                                <div class="form-group">
                                    <label>Grade</label>
                                    <input class="form-control" type="text" placeholder={grade} value={grade} onChange={e => setGrade(e.target.value)} disabled />
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateNama(e)}>Save</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => {setNama(mh.nama_mahasiswa);setNilai(mh.nilai_mahasiswa)}}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditMhs;