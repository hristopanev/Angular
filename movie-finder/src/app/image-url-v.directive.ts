import { Directive, ElementRef, HostListener } from '@angular/core';
import { element } from 'protractor';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageUrlV]'
})
export class ImageUrlVDirective {

  constructor(private elref: ElementRef, private form:NgForm) {
    console.log('from directive', elref)
   }

   @HostListener('input')
   inputHandle() {
     let element: string = this.elref.nativeElement.value;
      if(element.startsWith('http') && (element.endsWith('.png') || element.endsWith('.jpg'))) {
        this.elref.nativeElement.style.borderColor = 'green';
        this.form.control.setErrors(null);
      }else {
        this.elref.nativeElement.style.borderColor = 'red';
        this.form.control.setErrors({'image': true})
      }
   }

}
