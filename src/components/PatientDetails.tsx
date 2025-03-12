
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

type patientDertailsProps =
    {
        patient: Patient
    }

export default function PatientDetails({ patient }: patientDertailsProps) {

    const deletePatientStore = usePatientStore( ( state ) => state.deletePatient )
    const getPatientById = usePatientStore( ( state ) => state.getPatientById )

    return (
        <div className="
            mx-5my-10
            px-5 
            py-10
            bg-white
            rounded-xl"
        >
            <PatientDetailItem
                label="ID"
                data={patient.id}
            />
            <PatientDetailItem
                label="Nombre"
                data={patient.name}
            />
            <PatientDetailItem
                label="Propietario"
                data={patient.caretaker}
            />
            <PatientDetailItem
                label="Email"
                data={patient.email}
            />
            <PatientDetailItem
                label="Propietario"
                data={patient.date.toString()}
            />
            <PatientDetailItem
                label="Sintomas"
                data={patient.symptoms}
            />

            <div className="
                flex
                flex-col
                lg:flex-row
                gap-3
                justify-between
                mt-10"
            >
                <button className="
                    py-2 px-10 
                    bg-indigo-600 
                    hover:bg-indigo-700
                    hover:cursor-pointer
                    text-white
                    font-bold
                    uppercaase
                    rounded-lg"
                    type="button"
                    onClick={ () => getPatientById( patient.id ) }
                >
                    Editar
                </button>
                <button 
                    className="
                    py-2 px-10 
                    bg-red-600 
                    hover:bg-red-700
                    hover:cursor-pointer
                    text-white
                    font-bold
                    uppercaase
                    rounded-lg"
                    type="button"
                    onClick={ () => deletePatientStore( patient.id ) }
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}
