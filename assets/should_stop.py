def should_stop(instance_id):

    # extract metrics for last hour
    network = get_network_utilization(instance_id)
    cpu = get_cpu_utilization(instance_id)

    # check if all values are below threshold
    should_stop_network = _all_below_threshold(network, 100000)
    should_stop_cpu = _all_below_threshold(cpu, 2.5)

    if should_stop_network and should_stop_cpu:
        return True
    return False
