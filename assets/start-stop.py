import boto3

def start(instance_id):

    return boto3.client('ec2').start_instances(
        InstanceIds=[instance_id],
    )


def stop(instance_id):

    return boto3.client('ec2').stop_instances(
        InstanceIds=[instance_id],
    )
