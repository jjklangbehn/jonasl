import { Component } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-cta',
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {}
