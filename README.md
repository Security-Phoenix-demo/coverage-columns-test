# coverage-columns-test

Deliberately vulnerable sample used to exercise Phoenix Security's repository coverage columns
(SAST, SCA, IAC, CONTAINER) in a local environment. Do not deploy.

- `app.js`: SAST findings (SQL injection, eval, hardcoded secret, command injection)
- `package.json`: SCA findings (outdated dependencies)
- `infra/main.tf`: IaC findings (open security group, public S3 bucket, unencrypted volume)
- `Dockerfile`: container findings (old base image, root user)
