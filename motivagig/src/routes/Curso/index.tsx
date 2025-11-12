import { useNavigate } from "react-router-dom";
 
export default function CursoSemana() {
  const navigate = useNavigate();
 
 
  const handleNavigateToLogin = () => {
    navigate("/login");
  };