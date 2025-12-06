import React from 'react'
import './ManageAppointment.css'

import AppointmentTable from './AppointmentTable'


function ManageAppointment() {
  return (
    <div className='manage-appointment appContainer'>
      <div className="content-container">
        <div className="table">
          <AppointmentTable />
        </div>
      </div>
    </div>
  )
}

export default ManageAppointment