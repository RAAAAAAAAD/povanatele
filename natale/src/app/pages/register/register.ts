import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Chiama il metodo register definito nel PDF 
    this.authService.register(this.email, this.password)
      .then(() => {
        // Dopo la registrazione, porta l'utente alla Home 
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error("Errore di registrazione:", error);
        this.errorMessage = "Errore durante la registrazione (password troppo corta o email già usata).";
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}