import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
	selector: 'app-task',
	imports: [CardComponent, DatePipe],
	templateUrl: './task.component.html',
	styleUrl: './task.component.scss',
})
export class TaskComponent {
	@Input({ required: true }) task!: Task;

	private taskService = inject(TaskService);

	onCompleteTask() {
		this.taskService.removeTask(this.task.id);
	}
}
