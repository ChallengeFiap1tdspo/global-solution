import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
 
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
 
export default function DesativarConta() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
 
  const desativar = async () => {
   
    const dadosString = sessionStorage.getItem("trabalhadorLogado");
   
    if (!dadosString) {
      alert("Erro: Sessão expirada ou usuário não identificado.");
      navigate("/login");
      return;
    }
 
    const trabalhador = JSON.parse(dadosString);
   
   
    if (!window.confirm("Tem certeza absoluta? Sua conta será desativada.")) {
        return;
    }
 
    setIsLoading(true);
 
    try {
   
     
      const response = await fetch(`${API_URL}/${trabalhador.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-API-Key": API_KEY,
        },
      });
      if (response.status === 204 || response.ok) {
        alert("Conta desativada com sucesso! Sentiremos sua falta.");
       
       
        sessionStorage.removeItem("trabalhadorLogado");
        navigate("/");
       
      } else {
 