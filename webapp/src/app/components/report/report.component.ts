import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service'; 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [DataService],
   // OnPush - Stops automatic change detection. 
   // change detection need to be triggered manually by calling detectChanges() on the change detector object
   // Events (e.g. button click) automatically call detectChanges() internally
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent implements OnInit
{
  cdCount : number;
  timerId : number;

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

  // this._ChangeDetectorRef we forcefully tell the constructor (dependency injection) to update the changes
  constructor(private _ChangeDetectorRef : ChangeDetectorRef, private _dataService : DataService)
  {
    this.cdCount = 1;
    console.log('Report comp : ' + this._dataService.getServiceId());

    this.timerId = window.setInterval(
      ()=>
      {
        this.updateCDCount(); 
        console.log(this.cdCount);
        this._ChangeDetectorRef.detectChanges();
      },
      60000 // 3 seconds
      );
  }

  ngOnInit()
  {
  }

  //Destructor (c# Dispose)
  ngOnDestroy()
  {
    clearInterval(this.timerId);
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
