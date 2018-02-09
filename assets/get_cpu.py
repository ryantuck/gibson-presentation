def get_cpu_utilization(instance_id):
    """
    Retrieves CPU Utilization for the past hour at 5-minute intervals
    for a given user's instance.
    """
    now = datetime.datetime.utcnow()

    cloudwatch = boto3.resource('cloudwatch')
    metric = cloudwatch.Metric('AWS/EC2', 'CPUUtilization')

    response = metric.get_statistics(
        Dimensions=[
            {'Name': 'InstanceId', 'Value': instance_id},
        ],
        StartTime=now-datetime.timedelta(hours=1),
        EndTime=now,
        Period=300,
        Statistics=['Maximum'],
    )

    # return chronological results
    ordered_data = sorted(response['Datapoints'], key=lambda x: x['Timestamp'])
    return ordered_data
