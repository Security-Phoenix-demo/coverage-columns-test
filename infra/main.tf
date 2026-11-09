provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "open" {
  name        = "open-to-world"
  description = "Allows everything from everywhere"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_s3_bucket" "public" {
  bucket = "coverage-columns-test-public"
  acl    = "public-read"
}

resource "aws_ebs_volume" "plain" {
  availability_zone = "us-east-1a"
  size              = 10
  encrypted         = false
}
