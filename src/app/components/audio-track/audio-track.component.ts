import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input, AfterViewInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

//TODO: add title

@Component({
  selector: 'app-audio-track',
  templateUrl: './audio-track.component.html',
  styleUrl: './audio-track.component.scss'
})
export class AudioTrackComponent implements AfterViewInit, OnDestroy {
  @ViewChild('waveform') waveformEl: ElementRef;

  @Input() imagePath: string = '';
  @Input() audioPath: string = '';
  @Input() title: string = '';

  wavesurfer: WaveSurfer;
  isPlaying = false;

  ngAfterViewInit(): void {
    this.wavesurfer = WaveSurfer.create({
      container: this.waveformEl.nativeElement,
      height: 28,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      cursorWidth: 0,
      waveColor: '#bdbec0',
      progressColor: '#31BC6D',
      cursorColor: 'navy',
      url: this.audioPath,
    });

    this.wavesurfer.on('play', () => this.isPlaying = true);
    this.wavesurfer.on('pause', () => this.isPlaying = false);
    this.wavesurfer.on('finish', () => this.isPlaying = false);
  }

  ngOnDestroy(): void {
    //TODO: unsibscribe from the events as well
    if (this.wavesurfer) {
      this.wavesurfer.destroy();
    }
  }

  playPause(): void {
    this.wavesurfer.playPause();
  }
}
