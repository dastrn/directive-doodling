import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { ModFactorFormatter2 } from '../services/modFactorFormatter2.service';


@Directive({
    selector: '[nicDecimalFormatter]'
})
export class DecimalFormatterDirective implements OnInit {

    private el: HTMLInputElement;

    constructor(private elementRef: ElementRef, private modFactorFormatter: ModFactorFormatter2) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        // this.el.value = this.modFactorFormatter.formatMyStringForModFactor(this.el.value);
    }

    @HostListener('blur', ['$event.target.value'])
    onBlur(value) {
        this.el.value = this.modFactorFormatter.formatMyStringForModFactor(this.el.value);
    }

    @HostListener('keyup', ['$event.target.value'])
    onkeyUp(value) {
        // This regex removes any character that isn't 0-9 or a decimal point.
        this.el.value = this.el.value.replace(/[^0-9.]/g, '');
    }
}
