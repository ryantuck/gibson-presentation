def manage_instance(user, state, instance_id):
    """
    Stops instance if its CPU / Network graphs indicate
    it's not being used.
    """

    if state == 'stopped':
        print('{0: <20} | instance already stopped'.format(user))

    elif should_stop(instance_id):
        print('{0: <20} | stopping instance'.format(user))
        stop(instance_id)

    else:
        print('{0: <20} | no need to stop yet'.format(user))
