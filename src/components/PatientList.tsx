import { usePatientStore } from "../store"


export default function PatientList() {
  
  const { patients } = usePatientStore() 
  
  return (
    
    <div>patients</div>

  )
}
