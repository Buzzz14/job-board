"use client";

import React, { useState } from "react";
import {
  useGetJobsQuery,
  useDeleteJobMutation,
  Job,
} from "../redux/features/jobs/jobsApi";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import EditJobForm from "./EditJobForm";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export default function JobList() {
  const { data: jobs, error, isLoading } = useGetJobsQuery();
  const [deleteJob] = useDeleteJobMutation();

  const [showModal, setShowModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null);

  const handleDeleteClick = (job: Job) => {
    setJobToDelete(job);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (jobToDelete) {
      await deleteJob(jobToDelete.id);
      setJobToDelete(null);
      setShowModal(false);
    }
  };

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Failed to load jobs.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      {jobs && jobs.length === 0 && <p>No jobs available.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs?.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>{job.description}</p>
              <div className="flex gap-2">
                <EditJobForm job={job} />
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteClick(job)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete the job &quot;{jobToDelete?.title}
            &quot;?
          </p>
          <DialogFooter className="pt-4">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
