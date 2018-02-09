def stop(instance_id):
    """
    Stops a user's instance.
    Idempotent.
    """
    response = boto3.client('ec2').stop_instances(
        InstanceIds=[instance_id],
    )
