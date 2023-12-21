import React, { Fragment, useEffect, useState } from "react";

import EditMhs from "./EditMhs"

const ListMhs = () => {

    const [mhs, setMhs] = useState([])

    //delete
    const deleteMhs = async id => {
        try {
            const deleteMhs = await fetch(`http://localhost:5000/deletemhs/${id}`, { method: "PUT" })
            // console.log(deleteMhs)
            setMhs(mhs.filter(b => b.mhs_id !== id))
        } catch (error) {
            console.log(error.message)
        }
    }

    const getMhs = async () => {
        try {

            const response = await fetch("http://localhost:5000/getmhs");
            const jsonData = await response.json();
            setMhs(jsonData);
            // console.log(jsonData)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getMhs();
    }, [])

    // console.log("mhs: ", mhs[0].mhs_id)

    return (
        <Fragment>
            <div class="container">
                <table class="table mt-5 text-center table-secondary">
                <thead>
                    <tr>
                        <th class="text-center" scope="col">Students Name</th>
                        <th class="text-center" scope="col">Score</th>
                        <th class="text-center" scope="col">Grade</th>
                        <th class="text-center" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mhs.map(a => {
                        return (
                            <tr key={a.mhs_id}>
                                <td>{a.nama_mahasiswa}</td>
                                <td>{a.nilai_mahasiswa}</td>
                                <td>{a.grade}</td>
                                <td>
                                    <EditMhs mh={a} />
                                    {/* <li class="list-inline-item">
                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip"
                                        data-placement="top" title="Edit" ><i class="fa fa-edit"></i></button>
                                </li> */}
                                    <li class="list-inline-item">
                                        <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-target={`#delete${a.mhs_id}`} data-placement="top" title="Delete"><i class="fa fa-trash" ></i></button>
                                    </li>
                                    <div class="modal" id={`delete${a.mhs_id}`}>
                                        <div class="modal-dialog">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <h4 class="modal-title">Delete</h4>
                                                </div>

                                                <div class="modal-body">
                                                    Are you sure to delete this data?<br />
                                                    <p class="text-left">
                                                        Name: {a.nama_mahasiswa}<br />
                                                        Score: {a.nilai_mahasiswa}<br />
                                                        Grade: {a.grade}</p>
                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => deleteMhs(a.mhs_id)}>Yes</button>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            


        </Fragment>
    )
}

export default ListMhs