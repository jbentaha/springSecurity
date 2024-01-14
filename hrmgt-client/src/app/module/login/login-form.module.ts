import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginFormComponent } from './login-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        LoginFormComponent
    ],
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [LoginFormComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginFormModule { }