import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createScheduleId } from "../utils/event-utils";

export default class Calendar extends React.Component {
	state = {
		weekendsVisible: true,
		currentSchedules: [],
	};

	render() {
		return (
			<div className="schedule">
				{this.renderSidebar()}
				<div className="schedule-main">
					<FullCalendar
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
						headerToolbar={{
							left: "prev,next today",
							center: "title",
							right: "dayGridMonth,timeGridWeek,timeGridDay",
						}}
						initialView="dayGridMonth"
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						weekends={this.state.weekendsVisible}
						initialEvents={INITIAL_EVENTS}
						select={this.handleDateSelect}
						eventContent={renderContent}
						eventClick={this.handleEventClick}
						eventsSet={this.handleEvents}
					/>
				</div>
			</div>
		);
	}

	renderSidebar() {
		return <div></div>;
	}

	handleWeekendsToggle = () => {
		this.setState({
			weekendsVisible: !this.state.weekendsVisible,
		});
	};

	handleDateSelect = (selectInfo) => {
		let title = prompt("Enter Employee");
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createScheduleId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};

	handleEventClick = (clickInfo) => {
		if (
			window.confirm(
				`Do you want to remove this employee? '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};

	handleEvents = (schedules) => {
		this.setState({
			currentSchedules: schedules,
		});
	};
}

function renderContent(scheduleInfo) {
	return (
		<>
			<b>{scheduleInfo.timeText}</b>
			<i>{scheduleInfo.event.title}</i>
		</>
	);
}
