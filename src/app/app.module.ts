import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { EstacionesService } from './service/estaciones.service';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(FormsModule), // 👈 Agrega esto
    EstacionesService,
    AuthService,
  ],
}).catch((err) => console.error(err));
