# ... continued ...

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
