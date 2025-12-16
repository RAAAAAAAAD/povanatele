import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service'; // Assicurati che il percorso sia corretto
import { FormsModule } from '@angular/forms'; // Necessario per [(ngModel)]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule qui
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Chiama il metodo login definito nel PDF 
    this.authService.login(this.email, this.password)
      .then(() => {
        // Se il login ha successo, vai alla home 
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error("Errore di login:", error);
        this.errorMessage = "Credenziali non valide o errore di connessione.";
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}