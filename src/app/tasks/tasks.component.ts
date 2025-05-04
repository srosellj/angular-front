import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { type NewTaskData, type Task } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
	selector: 'app-tasks',
	imports: [TaskComponent, AddTaskComponent],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss',
})
export class TasksComponent {
	@Input({ required: true }) userId!: string;
	@Input({ required: true }) name!: string;

	isAddingTask = false;

	constructor(private taskService: TaskService) {}

	get selectedUserTasks() {
		return this.taskService.getUserTasks(this.userId);
	}

	onStartAddTask() {
		this.isAddingTask = true;
	}

	onCloseAddTask() {
		this.isAddingTask = false;
	}
}
