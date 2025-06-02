
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Target, Plus, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { getUserGoals, createGoal, updateGoalProgress, getGoalCategories } from "@/actions/goals";

type Goal = {
    id: number;
    title: string;
    description: string;
    targetAmount: number;
    currentAmount: number;
    targetDate: Date | null;
    category: {
        name: string;
        icon: string;
    };
};

type GoalCategory = {
    id: number;
    name: string;
    icon: string;
    description: string;
};

export const GoalsDashboard = () => {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [categories, setCategories] = useState<GoalCategory[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

    const [newGoal, setNewGoal] = useState({
        title: "",
        description: "",
        targetAmount: 0,
        targetDate: "",
        categoryId: 1,
    });

    const [progressAmount, setProgressAmount] = useState(0);
    const [progressNote, setProgressNote] = useState("");

    useEffect(() => {
        loadGoals();
        loadCategories();
    }, []);

    const loadGoals = async () => {
        try {
            const userGoals = await getUserGoals();
            setGoals(userGoals as Goal[]);
        } catch (error) {
            console.error("Failed to load goals:", error);
        }
    };

    const loadCategories = async () => {
        try {
            const goalCategories = await getGoalCategories();
            setCategories(goalCategories);
        } catch (error) {
            console.error("Failed to load categories:", error);
        }
    };

    const handleCreateGoal = async () => {
        try {
            await createGoal(
                newGoal.title,
                newGoal.description,
                newGoal.targetAmount,
                newGoal.targetDate,
                newGoal.categoryId
            );
            setIsCreateModalOpen(false);
            setNewGoal({
                title: "",
                description: "",
                targetAmount: 0,
                targetDate: "",
                categoryId: 1,
            });
            loadGoals();
        } catch (error) {
            console.error("Failed to create goal:", error);
        }
    };

    const handleUpdateProgress = async () => {
        if (!selectedGoal) return;

        try {
            await updateGoalProgress(selectedGoal.id, progressAmount, progressNote);
            setIsProgressModalOpen(false);
            setProgressAmount(0);
            setProgressNote("");
            setSelectedGoal(null);
            loadGoals();
        } catch (error) {
            console.error("Failed to update progress:", error);
        }
    };

    const calculateProgress = (current: number, target: number) => {
        return Math.min((current / target) * 100, 100);
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-500" />
                    <h2 className="text-2xl font-bold">Financial Goals</h2>
                </div>
                <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                    <DialogTrigger asChild>
                        <Button className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            New Goal
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Financial Goal</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Goal title"
                                value={newGoal.title}
                                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                                className="w-full p-2 border rounded"
                            />
                            <textarea
                                placeholder="Description"
                                value={newGoal.description}
                                onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="number"
                                placeholder="Target amount"
                                value={newGoal.targetAmount || ""}
                                onChange={(e) => setNewGoal({ ...newGoal, targetAmount: Number(e.target.value) })}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="date"
                                value={newGoal.targetDate}
                                onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
                                className="w-full p-2 border rounded"
                            />
                            <select
                                value={newGoal.categoryId}
                                onChange={(e) => setNewGoal({ ...newGoal, categoryId: Number(e.target.value) })}
                                className="w-full p-2 border rounded"
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.icon} {category.name}
                                    </option>
                                ))}
                            </select>
                            <Button onClick={handleCreateGoal} className="w-full">
                                Create Goal
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {goals.map((goal) => {
                    const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
                    const isCompleted = progress >= 100;

                    return (
                        <div key={goal.id} className="p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">{goal.category.icon}</span>
                                <h3 className="font-semibold">{goal.title}</h3>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                            
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>${goal.currentAmount.toLocaleString()}</span>
                                    <span>${goal.targetAmount.toLocaleString()}</span>
                                </div>
                                <Progress value={progress} className="h-2" />
                                <div className="text-sm text-gray-500">{progress.toFixed(1)}% complete</div>
                            </div>

                            {goal.targetDate && (
                                <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                                    <Calendar className="h-3 w-3" />
                                    Target: {new Date(goal.targetDate).toLocaleDateString()}
                                </div>
                            )}

                            {!isCompleted && (
                                <Button
                                    onClick={() => {
                                        setSelectedGoal(goal);
                                        setIsProgressModalOpen(true);
                                    }}
                                    variant="outline"
                                    size="sm"
                                    className="w-full mt-3"
                                >
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    Add Progress
                                </Button>
                            )}

                            {isCompleted && (
                                <div className="text-green-600 font-semibold text-center mt-3">
                                    🎉 Goal Completed!
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <Dialog open={isProgressModalOpen} onOpenChange={setIsProgressModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Progress: {selectedGoal?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            <input
                                type="number"
                                placeholder="Amount to add"
                                value={progressAmount || ""}
                                onChange={(e) => setProgressAmount(Number(e.target.value))}
                                className="flex-1 p-2 border rounded"
                            />
                        </div>
                        <textarea
                            placeholder="Note (optional)"
                            value={progressNote}
                            onChange={(e) => setProgressNote(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        <Button onClick={handleUpdateProgress} className="w-full">
                            Update Progress
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};
