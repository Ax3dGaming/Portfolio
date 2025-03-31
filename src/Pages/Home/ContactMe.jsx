import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Store } from 'react-notifications-component';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    title: '', // Ajout du champ title
    time: new Date().toLocaleString() // Ajoutez l'heure ici
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assurez-vous que tous les champs sont remplis
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.title) {
      alert("Please fill out all fields.");
      return;
    }

    // Utilisation d'EmailJS pour envoyer l'email
    emailjs
      .sendForm(
        "service_tzqixx8", // Votre ID de service
        "template_z47cnbg", // Votre ID de template
        e.target,           // Formulaire à envoyer
        "WsfLyRYZ1FniIN9gv" // Votre ID d'utilisateur
      )
      .then(
        (result) => {
          Store.addNotification({
            title: "Notification",
            message: "Message correctement envoyé !",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            title: '' // Réinitialisation du champ title après l'envoi
          });
        },
        (error) => {
          Store.addNotification({
            title: "Notification",
            message: "Erreur dans l'envoi du message !" + error,
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contactez Moi</h2>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="firstName" className="contact--label">
            <span className="text-md">Prénom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName" className="contact--label">
            <span className="text-md">Nom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          {/* Nouveau champ title */}
          <label htmlFor="title" className="contact--label">
            <span className="text-md">Titre</span>
            <input
              type="text"
              className="contact--input text-md"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Entrez votre message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Envoyer</button>
        </div>
      </form>
    </section>
  );
}
