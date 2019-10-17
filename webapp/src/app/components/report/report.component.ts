import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // add this if we want to skip from Change Detection
})
export class ReportComponent implements OnInit
{
  cdCount: number;

  // constructor()
  // {
  //   this.cdCount = 1;
  //   setInterval(
  //     ()=>
  //     {
  //       this.updateCDCount(); 
  //       console.log(this.cdCount)
  //     },
  //     3000 // 3 seconds
  //     );
  // }

  constructor(private _ChangeDetectorRef : ChangeDetectorRef)
  {
    this.cdCount = 1;
    setInterval(
      ()=>
      {
        this.updateCDCount(); 
        console.log(this.cdCount);
        this._ChangeDetectorRef.detectChanges();
      },
      3000 // 3 seconds
      );
  }

  ngOnInit()
  {
  }

  updateCDCount()
  {
    this.cdCount++;
  }

  handleUpdate()
  {
    this.updateCDCount();
  }

}
