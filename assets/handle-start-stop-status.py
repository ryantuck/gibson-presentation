# ... continued ...

if action == 'start':
    gibson.start(user_instance['instance_id'])
    return _return_payload(
        message=start_message.format(user=who),
        color='green',
    )

elif action == 'stop':
    gibson.stop(user_instance['instance_id'])
    return _return_payload(
        message='stopping instance for: {}'.format(who),
        color='green',
    )

elif action == 'status':
    return _return_payload(
        message='status for user {}: {}'.format(who, user_instance['state']),
        color='gray',
    )
