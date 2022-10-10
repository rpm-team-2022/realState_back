variable "project_id" {
  description = "backend-365003"
}
variable "project_name" {
  description = "backend"
}

variable "billing_ac_id" {
  description = "01967F-1DC65A-2EB891"
}

terraform {
  backend "gcs" {
    bucket  = "texplorerbucket"
    prefix  = "terraform/state"
  }
}
resource "google_project_service" "my_project_api" {
  project = "${var.project_id}"
  service = "compute.googleapis.com"

  disable_dependent_services = true
}
resource "google_compute_instance" "default" {
  project      = "${var.project_id}"
  name         = "terraform"
  machine_type = "f1-micro"
  zone         = "us-central1-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  }

  network_interface {
    network = "default"
    access_config {
    }
  }
  depends_on = ["google_project_service.my_project_api"]
}
output "machinename" {
  value = "${google_compute_instance.default.name}"
}