def handle(event, context):

    # get input string from hipchat room
    input_string = event['item']['message']['message'].strip(' ')

    # remove leading /gibson
    command = input_string[len('/gibson '):]

    if command == 'overview':
        # ...

    if command == 'help':
        # ...

    parts = command.split(' ')

    if len(parts) != 2:
        return _return_payload(
            message="please use me properly! see '/gibson help'",
            color='yellow',
        )

    action = parts[0]
    who = parts[1]

    if action not in ['start', 'stop', 'status']:
        return _return_payload(
            message='action must be either start, stop, or status',
            color='yellow',
        )

    instances = gibson.get_all_instances()

    filtered_instances = [i for i in instances if i['user'] == who]

    if len(filtered_instances) == 0:
        # ...

    user_instance = filtered_instances[0]

    if action == 'start':
        gibson.start(user_instance['instance_id'])
        # ...

    elif action == 'stop':
        gibson.stop(user_instance['instance_id'])
        # ...

    elif action == 'status':
        return _return_payload(
            message='status for user {}: {}'.format(who, user_instance['state']),
            color='gray',
        )

    else:
        return _return_payload(
            message='uncaught weirdness',
            color='gray',
        )
