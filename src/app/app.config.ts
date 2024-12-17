import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(provideFirebaseApp(() => initializeApp({
    "projectId": "ringoffire-d823b",
    "appId": "1:395091697250:web:678c6219644cbb7508bb3b",
    "storageBucket": "ringoffire-d823b.firebasestorage.app",
    "apiKey": "AIzaSyB5inZjVVhLP7_ocb6h6D2QmbxXAmlcSzk",
    "authDomain": "ringoffire-d823b.firebaseapp.com",
    "messagingSenderId": "395091697250"
  }))),
  importProvidersFrom(provideAuth(() => getAuth())),
  importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
