import React from 'react';

const TableShow = ({ data }) => {

    const renderRecords = data.map((record) => {
        return (
            <tr>
                <td>{record.userName}</td>
                <td>{record.userMail}</td>
                <td>{record.phoneNumber}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                    </tr>
                </thead>

                <tbody>
                    {renderRecords}
                </tbody>

            </table>
        </div>
    )
}

export default TableShow;