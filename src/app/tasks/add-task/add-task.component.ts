import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
	selector: 'app-add-task',
	imports: [FormsModule],
	templateUrl: './add-task.component.html',
	styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
	@Input({ required: true }) userId!: string;
	@Output() close = new EventEmitter<void>();

	private taskService = inject(TaskService);

	enteredTitle = '';
	enteredSummary = '';
	enteredDueDate = '';

	onSubmit() {
		this.taskService.addTask(
			{
				title: this.enteredTitle,
				summary: this.enteredSummary,
				dueDate: this.enteredDueDate,
			},
			this.userId,
		);

		this.close.emit();
	}

	onCancel() {
		this.close.emit();
	}
}
