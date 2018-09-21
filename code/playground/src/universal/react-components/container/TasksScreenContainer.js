import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEntityEventsThunk } from "../../redux-actions/thunks";
import TasksScreen from "../presentational/TasksScreen";

const mapStateToProps = (state) => {
    return {
        tasks: state.entities.tasks.calculatedEntities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchEntityEvents: () => dispatch(fetchEntityEventsThunk())
    };
};

class TasksScreenContainer extends Component {
    componentWillMount() {
        console.debug("Dispatching fetchEntityEventsThunk on TasksScreenContainer componentWillMount.");
        this.props.dispatchFetchEntityEvents();
    }

    render() {
        return <TasksScreen />;
    }
}

TasksScreenContainer.ssrDispatchHook = fetchEntityEventsThunk;

export default connect(mapStateToProps, mapDispatchToProps)(TasksScreenContainer);
