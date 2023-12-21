import React, { Fragment, useState } from "react";

const InputMhs = () => {

    const [nama_mahasiswa, setNama] = useState("")
    const [nilai_mahasiswa, setNilai] = useState("")
    let [grade, setGrade] = useState("")

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




    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {

            const body = { nama_mahasiswa, nilai_mahasiswa, grade }
            const response = await fetch("http://localhost:5000/addmhs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            console.log(response)
            window.location = "/"
        } catch (error) {
            console.log(error.message)

        }

    }

    return (
        <Fragment>
            <div class="container-sm">
                {/* <div>
                <h1 className="text-center mt-5">Students Score</h1>
            </div> */}
                <div class="container">
                    <div className="mt-5 d-flex">
                        <button className="btn btn-primary text-light" data-toggle="modal" data-target="#inputModal" type="button" onClick={() => { setNama(""); setNilai("") }}>add data</button>
                    </div>
                </div>


                {/* <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={nama_mahasiswa} onChange={e => setNama(e.target.value)} />
                <input type="text" className="form-control" value={nilai_mahasiswa} onChange={e => setNilai(e.target.value)} />
                <input type="text" className="form-control" value={grade} onChange={e => setGrade(e.target.value)} />
            </form> */}

                <div class="modal" id="inputModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Add Student Data</h4>
                                {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                            </div>

                            <div class="modal-body">
                                <form id="formInput">
                                    <div class="form-group">
                                        <label for="nama">Student Name</label>
                                        <input id="nama " type="text" className="form-control" value={nama_mahasiswa} onChange={e => setNama(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="nilai">Student Score</label><span class="p-2 fs-5 fst-italic">*only numbers</span>
                                        <input id="nilai " type="number" min="0" className="form-control" value={nilai_mahasiswa} onChange={e => setNilai(e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Grade</label>
                                        {/* <input disable type="text" class="form-control" value={grade} onChange={e => setGrade(e.target.value)} /> */}
                                        <input class="form-control" type="text" value={grade} disabled onChange={e => setGrade(e.target.value)} />
                                    </div>
                                </form>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={onSubmitForm}>Save</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => { setNama(""); setNilai("") }} value="Reset form">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default InputMhs;