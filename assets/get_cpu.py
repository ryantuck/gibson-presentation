def get_cpu_utilization(instance_id):

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
    return sorted(response['Datapoints'], key=lambda x: x['Timestamp'])
