import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @ViewChild('myForm') myForm: ElementRef | undefined;
  @ViewChild('nameField') nameField: ElementRef | undefined;
  @ViewChild('mailField') mailField: ElementRef | undefined;
  @ViewChild('messageField') messageField: ElementRef | undefined;
  @ViewChild('dsgvo') dsgvo: ElementRef | undefined;
  @ViewChild('sendButton') sendButton: ElementRef | undefined;

  messageSent: boolean = false;

  async sendMail() {
    let nameField = this.nameField?.nativeElement;
    let mailField = this.mailField?.nativeElement;
    let messageField = this.messageField?.nativeElement;
    let dsgvo = this.dsgvo?.nativeElement;
    let sendButton = this.sendButton?.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    dsgvo.checked = true;
    sendButton.disabled = true;

    //Animation anzeigen, dass gerade gesendet wird

    let formData = new FormData(this.myForm!.nativeElement);
    formData.append('name', nameField.value);
    formData.append('mail', mailField.value);
    formData.append('message', messageField.value);

    //senden
    await fetch('https://yvonne-goetzeler.developerakademie.net/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );

    this.messageSent = true;

    nameField.value = '';
    mailField.value = '';
    messageField.value = '';

    //Text anzeigen: Nachricht gesendet

    setTimeout(() => {
      this.messageSent = false;

    dsgvo.checked = false;
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }, 4500);
  }
}
